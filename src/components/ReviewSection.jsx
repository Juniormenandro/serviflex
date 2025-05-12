
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Plus, Upload } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useUser } from '@supabase/auth-helpers-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const ReviewSection = () => {
  const user = useUser();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
    image: null
  });

  // Carrega avaliacao do banco
  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase 
      .from('reviews')
      .select('*')
      .order('created_at', {ascending: false});

      if (!error) {
        setReviews(data);
      }else {
        console.error('Erro ao carregar avaliações:', error.message);
      }
      setLoading(false);
    };
    fetchReviews();
  }, []);
  
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!user) {
          toast.error('You must be logged in to review.');
          setTimeout(() => navigate('/login'), 2000);
          return;
        }

    const { user_metadata } = user;
    const newEntry = {
      user_id: user.id,
      name: user_metadata.full_name,
      avatar: user_metadata.avatar_url,
      rating: newReview.rating,
      comment: newReview.comment,
      image: newReview.image
    };
    const { data, error } = await supabase.from('reviews').insert([newEntry]);

    if (error) {
      console.error('Error saving:', error.message);
      toast.error('Error saving Reviews.');
    }else{
      toast.success('Reviews completed successfully!');
      setOpen(false); // fecha o menu
      setReviews([...(data ?? []), ...reviews]);
      setNewReview({ rating: 5, comment: '', image: null });
    }
  };

  const ReviewCard = ({ review }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-xl"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        
        {/* Avatar + Name */}
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 min-w-[3rem] border-2 border-green-500/20">
            <AvatarImage src={review.avatar} alt={review.name} />
            <AvatarFallback>{review.name[0]}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-slate-200">{review.name}</h3>
        </div>
  
        {/* Date + Stars */}
        <div className="flex flex-col md:items-end text-sm text-slate-400">
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-slate-600'
                }`}
              />
            ))}
          </div>
          <time className="">{format(new Date(review.created_at), 'MMM d, yyyy')}</time>
        </div>
      </div>
  
      <p className="text-slate-300 leading-relaxed mt-4">{review.comment}</p>
    </motion.div>
  );
  

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Customer Reviews
            </h2>
            <p className="text-sm mt-2 mb-3 text-slate-400">
              See what our customers are saying about our services
            </p>
          </div>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                className="w-full md:w-auto bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
              >
                <Plus className="w-5 h-5 mr-2" />
                Write Review
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-900/95 backdrop-blur-lg border-slate-800">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Write a Review
                </SheetTitle>
              </SheetHeader>
              
              <form onSubmit={handleSubmitReview} className="mt-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Rating</label>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 transition-colors ${
                            i < newReview.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-slate-600 hover:text-yellow-400'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Your Review</label>
                  <Textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Share your experience..."
                    className="h-32 bg-slate-800/50 border-slate-700"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                >
                  Submit Review
                </Button>
              </form>
            </SheetContent>
          </Sheet>
        </div>

        <div className="max-h-[500px] overflow-y-auto pr-2 space-y-6 custom-scroll">
          <AnimatePresence>
            {
            !loading && reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}; 

export default ReviewSection;
