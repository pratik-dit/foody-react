import { useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    let params = useParams();
    
    return (
      <Component
      router={{ navigate, params }}
        {...props}
        />
    );
  };
  
  return Wrapper;
};