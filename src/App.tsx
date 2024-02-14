import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  Footer,
} from './components'

export default function App() {
  return (
    <>
      <main>
        {/* section 1 */}
        <SectionOne />
        {/* section 2 */}
        <SectionTwo />
        {/* section 3 */}
        <SectionThree />
        {/* section 4 */}
        <SectionFour />
      </main>
      <Footer />
    </>
  )
}
