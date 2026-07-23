"use client";
import React from 'react';
import { ShoppingBag, Search, Menu, User, ArrowRight } from "lucide-react";

export default function AuraStore() {
  const products = [
    { id: 1, name: "Aura Signature Hoodie", price: "$45", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800" },
    { id: 2, name: "Cyber Cargo Pants", price: "$62", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800" },
    { id: 3, name: "Midnight Mesh Top", price: "$32", img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800" },
    { id: 4, name: "Retro Street Tee", price: "$38", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 lg:hidden" />
          <h1 className="text-2xl font-black uppercase italic">AURA</h1>
        </div>
        <div className="hidden lg:flex gap-8 font-bold text-xs uppercase tracking-widest">
          <a href="#">New Drops</a>
          <a href="#">Shop All</a>
          <a href="#">Collections</a>
        </div>
        <div className="flex gap-4">
          <Search className="w-5 h-5" />
          <ShoppingBag className="w-5 h-5" />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center bg-zinc-900 pt-16">
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative text-center text-white p-4">
          <h2 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter">AURA '24</h2>
          <p className="mt-4 text-lg font-medium tracking-widest uppercase">The Women's Streetwear Revolution</p>
          <button className="mt-8 bg-white text-black px-10 py-4 font-bold uppercase hover:bg-black hover:text-white transition-all">Shop the Drop</button>
        </div>
      </header>

      {/* Product Grid */}
      <section className="p-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h3 className="text-3xl font-black uppercase italic">Trending Now</h3>
          <span className="border-b-2 border-black font-bold text-sm flex items-center gap-2 cursor-pointer">View All <ArrowRight className="w-4 h-4"/></span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(p => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <button className="absolute bottom-0 w-full bg-black text-white py-3 opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold text-xs">Add to Cart</button>
              </div>
              <h4 className="font-bold uppercase text-sm tracking-tight">{p.name}</h4>
              <p className="text-zinc-500 font-medium">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-100 p-12 text-center">
        <h4 className="text-2xl font-black uppercase italic mb-4">Join the Aura Club</h4>
        <p className="text-zinc-600 mb-6 uppercase text-xs tracking-widest font-bold">15% off your first order</p>
        <div className="max-w-md mx-auto flex gap-2">
          <input className="flex-1 p-3 border-2 border-zinc-300 outline-none focus:border-black uppercase text-xs font-bold" placeholder="Email Address" />
          <button className="bg-black text-white px-6 py-3 font-bold uppercase text-xs">Join</button>
        </div>
      </footer>
    </div>
  );
}
