import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const Container = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: center;

  .background {
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 2.3px 0.7px rgb(0, 0, 0, 0.1);
    height: 112px;
    position: relative;
    width: calc(100% - 50px);
  }
  .card-text {
    width: 80%;
    padding-left: 3%
    padding-right: 15%;
  }
  .card-title {
    color: #444444;
    font-size: 25px;
    font-weight: 600;
    line-height: normal;
    padding-left: 12%;
    padding-top: 5px;
    white-space: nowrap;
  }
  .card-description {
    color: #868686;
    font-size: 19px;
    font-weight: 500;
    margin-top: 1%;
    padding-left: 12%;
    line-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  .forward {
    width: 100%;
    position: absolute;
    height: 41px;
    width: 33px;
    opacity: 0.9;
    right: 4%;
  }
`

export default function PartItem({path, title, description}) {
  const router = useRouter();
  
  return (
    <Container onClick={()=>{ router.push(path) }}>
      <div className="background">
      <div className="card-text">
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
      </div>
      <img className="forward" alt="forward icon" src="forward.png"/>
      </div>
    </Container>
  );
}