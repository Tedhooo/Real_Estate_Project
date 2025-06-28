
// Real Estate & Mortgage Website – Full Version Restored

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [bookingData, setBookingData] = useState({ fullName: "", email: "", date: "", time: "", note: "" });
  const [search, setSearch] = useState("");

  const [properties, setProperties] = useState([
    { id: 1, title: "Modern Family Home", price: "$499,000", beds: 4, baths: 3, image: "https://source.unsplash.com/featured/?house,1" },
    { id: 2, title: "Downtown Condo", price: "$349,000", beds: 2, baths: 2, image: "https://source.unsplash.com/featured/?condo,2" },
    { id: 3, title: "Luxury Estate", price: "$1,200,000", beds: 5, baths: 4, image: "https://source.unsplash.com/featured/?mansion,3" },
  ]);

  const filteredProperties = properties.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const reviews = [
    {
      text: "Another 5‑star review in the books! … helping clients find their dream homes and making the process as smooth as possible.",
      client: "Happy Client"
    },
    {
      text: "Another glowing 5‑star review! We're beyond grateful for clients who trust Team Affinity to make their real estate journey smooth and stress‑free.",
      client: "First-Time Buyer"
    },
    {
      text: "Every 5‑star review is more than just a rating—it's a reminder of why we do what we do: to serve with integrity, care, and unwavering commitment.",
      client: "Investor Client"
    }
  ];

  const team = [
    {
      name: "Ted Ho",
      role: "Branch Manager • Loan Originator & REALTOR®",
      bio: "Branch Manager at Absolute Mortgage & Lending (Orlando, FL). With 5+ years of experience in lending and real estate, Ted guides first-time buyers, investors, and homeowners from loan to closing. NMLS# 2016303.",
      image: "https://scontent.xx.fbcdn.net/v/t1.6435-9/tedho_facebook_profile.jpg",
      links: [
        { label: "Facebook", url: "https://www.facebook.com/quoctuanho.tedho" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/ted-ho" },
        { label: "Instagram", url: "https://www.instagram.com/tedhorealestate" },
        { label: "YouTube - The Ho Hustle", url: "https://www.youtube.com/@thehohustle" },
        { label: "Absolute Mortgage & Lending", url: "https://www.absoluteml.com/staff-directory/" }
      ]
    },
    {
      name: "Team Affinity – LPT Realty",
      role: "Top 15 Real Estate Team (Orlando–Tampa)",
      bio: "One of the top-performing real estate teams in Florida, RealTrends-verified and known for heart, hustle, and honest service across the buying and selling journey.",
      image: "https://teamaffinity.lpthomesearch.com/assets/images/TeamAffinity-Logo.png",
      links: [
        { label: "Team Affinity Website", url: "https://teamaffinity.lpthomesearch.com/" }
      ]
    }
  ];

  return (
    <main style={{ fontFamily: 'Arial', lineHeight: 1.5 }}>

      {/* Hero Section */}
      <section style={{ background: '#000', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Your Trusted Partner in Real Estate & Mortgage</h1>
        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>Helping you buy, sell, and finance with confidence.</p>
      </section>

      {/* Property Search */}
      <section style={{ padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>Search Properties</h2>
        <div style={{ textAlign: 'center', margin: '1rem 0' }}>
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: '0.5rem', width: '80%', maxWidth: '400px' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredProperties.map((property) => (
            <div key={property.id} style={{ border: '1px solid #ccc', borderRadius: '8px', width: '280px', padding: '1rem' }}>
              <img src={property.image} alt={property.title} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '6px' }} />
              <h3>{property.title}</h3>
              <p>{property.price} • {property.beds} Bed • {property.baths} Bath</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section style={{ background: '#f9f9f9', padding: '3rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Book a Property Tour</h2>
        <form style={{ maxWidth: '600px', margin: '2rem auto', display: 'grid', gap: '1rem' }}>
          <input placeholder="Full Name" value={bookingData.fullName} onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })} />
          <input placeholder="Email" value={bookingData.email} onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })} />
          <input type="date" value={bookingData.date} onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })} />
          <input type="time" value={bookingData.time} onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })} />
          <textarea placeholder="Notes..." value={bookingData.note} onChange={(e) => setBookingData({ ...bookingData, note: e.target.value })} />
          <button type="submit" style={{ background: '#000', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: '4px' }}>Book Tour</button>
        </form>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>Client Testimonials</h2>
        <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
          {reviews.map((r, idx) => (
            <blockquote key={idx} style={{ marginBottom: '1.5rem', borderLeft: '4px solid gold', paddingLeft: '1rem', fontStyle: 'italic' }}>
              “{r.text}”<br />
              <span style={{ fontWeight: 'bold' }}>— {r.client}</span>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={{ background: '#f1f1f1', padding: '3rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Meet Our Team</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {team.map((member, idx) => (
            <div key={idx} style={{ maxWidth: '280px', textAlign: 'center' }}>
              <img src={member.image} alt={member.name} style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover' }} />
              <h3>{member.name}</h3>
              <p style={{ color: 'gold', fontWeight: 'bold' }}>{member.role}</p>
              <p style={{ fontSize: '0.9rem' }}>{member.bio}</p>
              <div style={{ marginTop: '0.5rem' }}>
                {member.links.map((link, i) => (
                  <div key={i}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
