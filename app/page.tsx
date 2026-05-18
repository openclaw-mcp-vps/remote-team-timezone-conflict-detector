export default function Home() {
  const faqs = [
    {
      q: 'How does timezone conflict detection work?',
      a: 'We analyze each team member\'s timezone and working hours, then surface overlapping windows where everyone is available — no more manual timezone math.'
    },
    {
      q: 'Can I connect my existing calendar?',
      a: 'Yes. TimeSync integrates with Google Calendar and Outlook so real busy/free data is used when finding optimal meeting slots.'
    },
    {
      q: 'Is there a free trial?',
      a: 'Every new account gets a 7-day free trial with full access. No credit card required to start.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Remote Team Scheduling
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find the best meeting times for{' '}
          <span className="text-[#58a6ff]">global teams</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          TimeSync detects timezone conflicts across your team and suggests optimal meeting windows — so you stop playing calendar Tetris.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">7-day free trial · No credit card required</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Timezone detection', 'Calendar sync', 'Conflict alerts', 'Optimal windows', 'Team management'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$12</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-sm text-[#6e7681] mb-6">per team workspace</p>
          <ul className="text-sm text-[#8b949e] space-y-3 mb-8 text-left">
            {[
              'Unlimited team members',
              'Google & Outlook calendar sync',
              'Real-time conflict detection',
              'Smart meeting suggestions',
              'Slack & email notifications',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started — $12/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} TimeSync. All rights reserved.
      </footer>
    </main>
  )
}
