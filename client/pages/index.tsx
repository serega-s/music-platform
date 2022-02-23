import type { NextPage } from "next"
import MainLayout from "../layouts/MainLayout"

const Index: NextPage = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>You are welcome</h1>
          <h3>We gathered the best music tracks here</h3>
        </div>
      </MainLayout>
      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Index
