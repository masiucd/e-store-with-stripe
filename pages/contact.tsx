import Drawer from "@components/animated/drawer"
import Layout from "@components/layout/layout"
import { Button } from "@components/styles/button"
import { useToggle } from "@hooks/toggle"
import React from "react"

const ContactPage = (): JSX.Element => {
  const { on, onToFalse, onToTrue } = useToggle()
  return (
    <Layout metaConfig={{ title: "Contact us" }}>
      <h1>Contact</h1>
      <Button onClick={onToTrue}>How to contact me</Button>
      <Drawer isOn={on} setOnToFalse={onToFalse}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos accusamus
          saepe id, est qui dicta vero tempora iure ducimus excepturi quod autem! Quaerat nostrum
          accusamus reprehenderit nihil sapiente. In ab, quod accusamus eum soluta temporibus
          veniam, ipsum perferendis labore quibusdam dolorum laboriosam dolorem distinctio sed
          animi, laudantium odit dolor officia odio sit et. Sit assumenda at atque sed recusandae
        </p>
      </Drawer>
    </Layout>
  )
}
export default ContactPage
