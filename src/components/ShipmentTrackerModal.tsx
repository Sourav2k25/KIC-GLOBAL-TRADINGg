import React, { useState } from 'react';
import { SAMPLE_TRACKING_DATA } from '../data/mockData';
import { ShipmentTracking } from '../types';
import { 
  Truck, 
  Search, 
  X, 
  CheckCircle2, 
  Clock, 
  Ship, 
  Thermometer, 
  Droplets, 
  Wind, 
  Anchor,
  Globe2
} from 'lucide-react';

interface ShipmentTrackerModalProps {
  onClose: () => void;
}

export default function ShipmentTrackerModal({ onClose }: ShipmentTrackerModalProps) {
  const [query, setQuery] = useState('SUDU7894210');
  const [trackingResult, setTrackingResult] = useState<ShipmentTracking | null>(SAMPLE_TRACKING_DATA);
  const [searched, setSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearched(true);
      setTrackingResult({
        ...SAMPLE_TRACKING_DATA,
        containerNumber: query.toUpperCase(),
        trackingNumber: `CGT-${Math.floor(Math.random() * 900000 + 100000)}`
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative my-8 p-6 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-300 border border-stone-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-amber-400">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-serif text-stone-100">Live Container & Reefer Tracker</h3>
            <p className="text-xs text-stone-400">Satellite IoT temperature telemetry & vessel milestone logs.</p>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter Container # (e.g. SUDU7894210) or Bill of Lading..."
              className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-400 font-mono"
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-800 hover:bg-emerald-700 text-stone-100 font-semibold px-5 py-2.5 rounded-xl text-xs transition-colors shrink-0"
          >
            Track Container
          </button>
        </form>

        {/* Tracking Details */}
        {searched && trackingResult && (
          <div className="space-y-6 text-xs">
            {/* Top Status Card */}
            <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider">Container Number</span>
                  <div className="text-base font-mono font-bold text-amber-400">{trackingResult.containerNumber}</div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider">Vessel / Voyage</span>
                  <div className="text-sm font-semibold text-stone-100">{trackingResult.vesselName} ({trackingResult.voyageNumber})</div>
                </div>
              </div>

              {/* Ports */}
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <span className="text-[10px] text-stone-400">Origin Port (ETD: {trackingResult.etd})</span>
                  <p className="font-semibold text-stone-200">{trackingResult.originPort}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-400">Destination Port (ETA: {trackingResult.eta})</span>
                  <p className="font-semibold text-emerald-400">{trackingResult.destinationPort}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1 pt-2">
                <div className="flex justify-between text-[11px] font-semibold">
                  <span className="text-emerald-400">Status: {trackingResult.currentStatus}</span>
                  <span className="text-stone-400 font-mono">{trackingResult.progressPercentage}% Voyage Completed</span>
                </div>
                <div className="w-full bg-stone-900 rounded-full h-2 overflow-hidden border border-stone-800">
                  <div
                    className="bg-gradient-to-r from-emerald-600 to-amber-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${trackingResult.progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Live Reefer Telemetry Sensors */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 text-center space-y-1">
                <div className="flex items-center justify-center gap-1 text-emerald-400 font-semibold">
                  <Thermometer className="w-3.5 h-3.5" />
                  <span>Temperature</span>
                </div>
                <div className="text-base font-mono font-bold text-stone-100">{trackingResult.currentTemperature}</div>
                <p className="text-[10px] text-stone-500">Target: {trackingResult.temperatureTarget}</p>
              </div>

              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 text-center space-y-1">
                <div className="flex items-center justify-center gap-1 text-amber-400 font-semibold">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Humidity</span>
                </div>
                <div className="text-base font-mono font-bold text-stone-100">{trackingResult.humidityLevel}</div>
                <p className="text-[10px] text-stone-500">Relative Humidity</p>
              </div>

              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 text-center space-y-1">
                <div className="flex items-center justify-center gap-1 text-emerald-400 font-semibold">
                  <Wind className="w-3.5 h-3.5" />
                  <span>Ventilation</span>
                </div>
                <div className="text-base font-mono font-bold text-stone-100">{trackingResult.ventilationSetting}</div>
                <p className="text-[10px] text-stone-500">Fresh Air Exchange</p>
              </div>
            </div>

            {/* Milestones Timeline */}
            <div className="space-y-2">
              <h4 className="font-bold uppercase tracking-wider text-stone-300 text-[11px]">Container Milestones & Customs Log</h4>
              <div className="space-y-2">
                {trackingResult.milestones.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-stone-950 p-2.5 rounded-xl border border-stone-800/80">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${m.completed ? 'text-emerald-400' : 'text-stone-700'}`} />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className={`font-semibold ${m.completed ? 'text-stone-200' : 'text-stone-500'}`}>{m.title}</span>
                        <span className="text-[10px] text-stone-500 font-mono">{m.date}</span>
                      </div>
                      <p className="text-[11px] text-stone-400">{m.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
