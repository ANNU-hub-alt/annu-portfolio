import React, { useState } from 'react';
import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { toast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.'
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.'
  })
});
type FormValues = z.infer<typeof formSchema>;
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await emailjs.send('service_4lqbbpk',
      // Service ID
      'template_1noc9bw',
      // Template ID
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message
      }, '9Y5DP1NEJtPReqz8Q' // Public Key
      );
      toast({
        title: 'Message sent!',
        description: "Thank you! I'll get back to you soon.",
        duration: 5000
      });
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: 'Something went wrong.',
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20 bg-gradient-to-b from-portfolio-darkBg/95 to-portfolio-darkBg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-portfolio-purple/20 p-3 rounded-full mr-4">
                  <Mail className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:annu.bunkar@example.com" className="text-white hover:text-portfolio-purple transition-colors">annubunkar1234@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-portfolio-blue/20 p-3 rounded-full mr-4">
                  <Phone className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+918565432190" className="text-white hover:text-portfolio-blue transition-colors">+91 1234567890</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-portfolio-purple/20 p-3 rounded-full mr-4">
                  <Github className="text-portfolio-purple" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a href="https://github.com/annubunkar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-portfolio-purple transition-colors">ANNU-hub-alt</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-portfolio-blue/20 p-3 rounded-full mr-4">
                  <Linkedin className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a href="https://linkedin.com/in/annubunkar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-portfolio-blue transition-colors">(7) Annu Bunkar | LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="name" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-sm text-gray-400">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="bg-white/5 border border-white/10 text-white focus:ring-portfolio-purple/50" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>} />
                
                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-sm text-gray-400">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" className="bg-white/5 border border-white/10 text-white focus:ring-portfolio-purple/50" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>} />
                
                <FormField control={form.control} name="message" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-sm text-gray-400">Message</FormLabel>
                      <FormControl>
                        <textarea rows={4} placeholder="Your message" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-portfolio-purple/50" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>} />
                
                <Button type="submit" disabled={isSubmitting} className="w-full bg-portfolio-purple hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-all duration-300 h-auto">
                  {isSubmitting ? <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span> : <span className="flex items-center gap-2">
                      Send Message <Send size={16} />
                    </span>}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-24 h-24 rounded-full bg-portfolio-purple/10 blur-xl"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full bg-portfolio-blue/10 blur-xl"></div>
    </section>;
};
export default Contact;