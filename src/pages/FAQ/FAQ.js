import React, { useState } from "react"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import "./FAQS.css"
export default function FAQ() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div>
      <SEO title="Shila || FAQ page" />
      <Layout>
        <div className="faq container h-full">
          <div className="faq-banner flex text-center bg-grey h-2">
            <h2 className="f-bold f-l">FAQS</h2>
          </div>

          <div className="faq-list my-5">
            {data.map((item, i) => {
              return (
                <div className="faq-item " onClick={() => toggle(i)} key={i}>
                  <div className="faq-item-btn ">
                    <span className="btn-round btn-black f-sm">{selected === i ? "-" : "+"}</span>
                  </div>
                  <div className="faq-item-content">
                    <div className="faq-title black ">
                      <p>{item.question}</p>
                    </div>

                    <div className={selected === i ? "faq-content grey f-xs show" : "faq-content grey f-xs "}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    </div>
  )
}

const data = [
  {
    question: "Question 1",
    answer: "Lorem 1ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad blanditiis quasi, recusandae quaerat quae quidem enim similique neque porro esse pariatur voluptate necessitatibus molestias non labore velit a nesciunt.Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad blanditiis quasi, recusandae quaerat quae quidem enim similique neque porro esse pariatur voluptate necessitatibus molestias non labore velit a nesciunt.",
  },
  {
    question: "Question 2",
    answer: "Lorem 2ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad blanditiis quasi, recusandae quaerat quae quidem enim similique neque porro esse pariatur voluptate necessitatibus molestias non labore velit a nesciunt.",
  },
  {
    question: "Question 3",
    answer: "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad blanditiis quasi, recusandae quaerat quae quidem enim similique neque porro esse pariatur voluptate necessitatibus molestias non labore velit a nesciunt.",
  },
  {
    question: "Question 4",
    answer: "Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad blanditiis quasi, recusandae quaerat quae quidem enim similique neque porro esse pariatur voluptate necessitatibus molestias non labore velit a nesciunt.Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad blanditiis quasi, recusandae quaerat quae quidem enim similique neque porro esse pariatur voluptate necessitatibus molestias non labore velit a nesciunt.",
  },
]
