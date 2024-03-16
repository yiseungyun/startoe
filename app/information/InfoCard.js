'use client'
import { styled } from "styled-components";

const Box = styled.div`
  background-color: rgb(26, 103, 195, 0.1);
  border-radius: 10px;
  width: calc(100% - 85px);
  margin: auto;
  margin-bottom: 18px;
  padding: 17px 15px 10px 15px;

  .top {
    color: #353535;
    font-size: 21px;
    font-weight: 600;
    border-bottom: solid 2px #8F8F8F;
    padding-bottom: 10px
  }
  .body {
    padding-top: 10px;
  }
  .main {
    color: #353535;
    font-size: 17px;
    font-weight: 500;
    line-height: 28px;
    padding-bottom: 3px;
  }
  .description {
    color: #353535;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
  }
`

export default function InfoCard({title, text}) {
  let content = text.split(' \\n');
  const first = content[0]
  if (content.length > 1) {
    content.shift()
  }
  return (
    <Box>
      <div className="top">{title}</div>
      <div className="body">
        <div className="main">{first}</div>
        {
          content ?
            content.map((a, i) => {
              return (
                <div className="description" key={i}>{a}</div>
              )
            })
            : null
        }
      </div>
    </Box>
  );
}