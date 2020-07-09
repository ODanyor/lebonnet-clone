import React from "react"
import { Footer, Column, ColumnTitle } from "./styles"

// Components
import { Link } from "shared/components"

const footerContent = [
  {
    title: "faq",
    content: [
      { to: "/terms&conditions", content: "terms & conditions" },
      { to: "/privacy&cookies", content: "privacy & cookies policy" },
      { to: "/returns&exchanges", content: "return & exchanges" },
    ],
  },
  {
    title: "who we are",
    content: [
      { to: "/store", content: "store locator" },
      { to: "/instagram", content: "instagram" },
    ],
  },
  {
    title: "company",
    content: [{ to: "/contactus", content: "contact us" }],
  },
  {
    title: "social",
    content: [
      { to: "", content: "Facebook" },
      { to: "", content: "Instagram" },
    ],
  },
]

const Columns = ({ data }) =>
  data.map((item, index) => (
    <Column key={index}>
      <ColumnTitle>{item.title}</ColumnTitle>
      {item.content.map((link, index) => (
        <Link key={index} to={link.to}>
          <div>{link.content}</div>
        </Link>
      ))}
    </Column>
  ))

const index = () => {
  return (
    <Footer>
      <Columns data={footerContent} />
    </Footer>
  )
}

export default index
