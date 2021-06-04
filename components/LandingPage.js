import Link from 'next/link';
import { motion } from 'framer-motion';

const buttonVariants = {
    hover: {
      scale: 1.1,
      opacity: 1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: 5
      }
    }
  }


const LandingPage = () => { 

   return (
        <section className="container flex align-center justify-between">
            <div className="flex-col items-center">
                <h1 className="text-3xl lg:text-5xl font-bold uppercase text-white"
                >
                Topnomi
                </h1>
                <Link href="/store">
                    <motion.button className="bg-transparent border-white opacity-70 text-white font-bold mt-4 py-2 px-4 rounded-full"
                    variants={buttonVariants}
                    whileHover="hover"
                    >
                    Near Me
                    </motion.button>
                </Link>
            </div>
            <div className="text-xl lg:text-3xl font-bold uppercase text-white">
                <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                >
                Take a photo.
                </motion.p>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
                >
                Upload.
                </motion.p>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                >
                Create your own personal album
                </motion.p>
            </div>
        </section>
   )

};

export default LandingPage;