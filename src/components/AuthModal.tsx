import React, { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { 
  User, 
  Lock, 
  Mail, 
  Building2, 
  Globe2, 
  X, 
  CheckCircle2, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onLoginSuccess: (email: string) => void;
}

export default function AuthModal({ onClose, onLoginSuccess }: AuthModalProps) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (isSupabaseConfigured && supabase) {
      try {
        if (isRegistering) {
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: { companyName, country }
            }
          });
          if (error) throw error;
          setMessage('Account created! Please check your inbox for confirmation link.');
          onLoginSuccess(email);
        } else {
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
          });
          if (error) throw error;
          setMessage('Signed in successfully!');
          onLoginSuccess(email);
        }
      } catch (err: any) {
        setMessage(err.message || 'Authentication failed. Please verify credentials.');
      } finally {
        setLoading(false);
      }
    } else {
      // Local session fallback
      setTimeout(() => {
        setLoading(false);
        setMessage(isRegistering ? 'Account registered successfully!' : 'Logged in to Buyer Portal!');
        onLoginSuccess(email || 'importer@casialglobal.com');
      }, 600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl w-full max-w-md p-6 space-y-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-300 border border-stone-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 border-b border-stone-800 pb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-0.5 border border-amber-500/40 mx-auto flex items-center justify-center">
            <User className="w-6 h-6 text-amber-400" />
          </div>
          <h3 className="text-xl font-bold font-serif text-stone-100">
            {isRegistering ? 'Register Buyer Account' : 'B2B Importer Portal'}
          </h3>
          <p className="text-xs text-stone-400">
            Access proforma quotes, Phytosanitary certificates, and container tracking logs.
          </p>
        </div>

        {message && (
          <div className="bg-emerald-950/80 border border-emerald-800 p-3 rounded-xl text-xs text-emerald-300 text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {isRegistering && (
            <>
              <div>
                <label className="block text-stone-300 font-medium mb-1">Company Name *</label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                    placeholder="Al-Mansoor Foodstuff LLC"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-9 pr-3 py-2.5 text-stone-100 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">Country *</label>
                <div className="relative">
                  <Globe2 className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    placeholder="UAE, Vietnam, Netherlands..."
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-9 pr-3 py-2.5 text-stone-100 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-stone-300 font-medium mb-1">Corporate Email *</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="buyer@company.com"
                className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-9 pr-3 py-2.5 text-stone-100 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1">Password *</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-9 pr-3 py-2.5 text-stone-100 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-bold py-3 rounded-xl text-xs transition-colors shadow-lg flex items-center justify-center gap-2 border border-emerald-600"
          >
            <span>{loading ? 'Processing...' : isRegistering ? 'Create Importer Account' : 'Sign In to Portal'}</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </form>

        <div className="text-center pt-2 border-t border-stone-800">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-xs text-amber-400 hover:underline"
          >
            {isRegistering ? 'Already have an account? Sign In' : "Don't have a buyer account? Register now"}
          </button>
        </div>
      </div>
    </div>
  );
}
