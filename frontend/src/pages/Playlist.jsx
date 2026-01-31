import React, { useState } from 'react';
import { Music, Play, Pause, Heart, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Playlist = () => {
  const [currentSong, setCurrentSong] = useState(null);

  // YouTube video IDs extracted from the URLs
  const songs = [
    {
      id: 'eCoyD4at3aU',
      title: 'Inkem Inkem Kaavaale',
      movie: 'Geetha Govindam',
      message: 'This song reminds me of the first time I saw you smile... 💕'
    },
    {
      id: 's9NBDKfVg1c',
      title: 'Samajavaragamana',
      movie: 'Ala Vaikunthapurramuloo',
      message: 'Every word of this song is what I feel for you...'
    },
    {
      id: 'Q1iskzwrcFU',
      title: 'Nee Kannu Neeli Samudram',
      movie: 'Uppena',
      message: 'Lost in your eyes like the deep blue sea...'
    },
    {
      id: 'aoo9QkKRNgI',
      title: 'Ee Raathale',
      movie: 'Radhe Shyam',
      message: 'Every night I think of you... 🌙'
    },
    {
      id: 'ySPKnRY56Cc',
      title: 'O Pilla Subhanallah',
      movie: 'Ala Modalaindi',
      message: 'Subhanallah - you are a blessing in my life!'
    },
    {
      id: 'EnMfK-XAtI0',
      title: 'Chuttamalle',
      movie: 'Devara',
      message: 'My heart beats only for you... 💓'
    },
    {
      id: 'CS7hBHVGWs0',
      title: 'Nenu Sailaja Title Song',
      movie: 'Nenu Sailaja',
      message: 'Pure love, just like ours could be...'
    },
    {
      id: 'TPYg7NBo4yY',
      title: 'Kushi Title Song',
      movie: 'Kushi',
      message: 'Wishing for our happy ending... 🌈'
    },
    {
      id: 'hYFzyK9ExuM',
      title: 'Oosupodu',
      movie: 'Fidaa',
      message: 'Sweet memories of us together...'
    },
    {
      id: 'Yzl8Zys4eRs',
      title: 'Vachinde',
      movie: 'Fidaa',
      message: 'When love comes calling, nothing else matters...'
    },
    {
      id: '2zR4TNTXB6I',
      title: 'Priya Priya',
      movie: 'Varsham',
      message: 'You are my Priya, my love, my everything... 💕'
    }
  ];

  const playSong = (song) => {
    if (currentSong?.id === song.id) {
      setCurrentSong(null);
    } else {
      setCurrentSong(song);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Music className="w-10 h-10 text-primary" />
          </motion.div>
          <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
            Our <span className="text-gradient-love">Playlist</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Telugu love songs that remind me of you, Harika. Each song carries a special message from my heart to yours. 🎵💕
          </p>
        </motion.div>

        {/* Now Playing */}
        {currentSong && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="glass-strong p-6 rounded-2xl border-primary/30">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Video Player */}
                <div className="flex-1">
                  <div className="aspect-video rounded-xl overflow-hidden bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${currentSong.id}?autoplay=1&rel=0`}
                      title={currentSong.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* Song Info */}
                <div className="lg:w-80 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                      <Volume2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-primary">Now Playing</p>
                      <h3 className="font-display text-xl text-foreground">{currentSong.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">From: {currentSong.movie}</p>
                  <div className="glass rounded-xl p-4">
                    <p className="font-script text-lg text-primary mb-2">For Harika:</p>
                    <p className="text-foreground italic">{currentSong.message}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Song List */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`valentine-card glass p-4 cursor-pointer border-border/50 hover:border-primary/50 transition-all duration-300 ${
                  currentSong?.id === song.id ? 'border-primary bg-primary/10' : ''
                }`}
                onClick={() => playSong(song)}
              >
                <div className="flex items-start gap-4">
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={`https://img.youtube.com/vi/${song.id}/mqdefault.jpg`}
                      alt={song.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      {currentSong?.id === song.id ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Song Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">{song.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{song.movie}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Heart className="w-3 h-3 text-primary fill-primary" />
                      <span className="text-xs text-primary truncate">{song.message.slice(0, 30)}...</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer message */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="glass rounded-2xl p-6 max-w-xl mx-auto">
            <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-4" />
            <p className="font-script text-xl text-foreground mb-2">
              Every song tells our story
            </p>
            <p className="text-muted-foreground">
              I hope these songs bring a smile to your face, Harika. Each one holds a special place in my heart because they remind me of you. 💕
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Playlist;
