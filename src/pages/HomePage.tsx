import { Hero } from '../components/home/Hero'
import { ProblemSolution } from '../components/home/ProblemSolution'
import { HowItWorks } from '../components/home/HowItWorks'
import { Features } from '../components/home/Features'
import { Templates } from '../components/home/Templates'
import { Audience } from '../components/home/Audience'
import { WhyTypst } from '../components/home/WhyTypst'
import { DownloadCta } from '../components/home/DownloadCta'
import { FAQ } from '../components/home/FAQ'
import { Tagline } from '../components/home/Tagline'

export function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Templates />
      <Audience />
      <WhyTypst />
      <DownloadCta />
      <FAQ />
      <Tagline />
    </>
  )
}
