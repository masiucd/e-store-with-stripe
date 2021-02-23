import Drawer from "@components/animated/drawer"
import Title from "@components/common/title"
import Layout from "@components/layout/layout"
import { Button } from "@components/styles/button"
import { useToggle } from "@hooks/toggle"
import { Main } from "@components/get-in-touch/main"

const ContactPage = (): JSX.Element => {
  const { on, onToFalse, onToTrue } = useToggle()
  return (
    <Layout metaConfig={{ title: "Contact us" }}>
      <section className="contact-wrapper">
        <Title title="Get in touch" subTitle="there are different ways to get in touch">
          <Button onClick={onToTrue}>find out how</Button>
        </Title>

        <Drawer isOn={on} setOnToFalse={onToFalse}>
          <Main />
        </Drawer>
      </section>
    </Layout>
  )
}
export default ContactPage
