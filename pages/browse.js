// import { loadEnvConfig } from '@next/env'

const Browse = () => {
  return (
    <div className="container">
      <main>Browse</main>
      <p></p>
    </div>
  )
};

// export const Browse = ({token, page}) => {
//   console.log(token, page);
//   return (<>Browse</>);
// }

/*
export const getServerSideProps = async () => {
  const page = pageContext.resolvedUrl;
  console.log(page);

  const apiResponse = await fetch (
    `${process.env.BASE_URL}/api/get_token?email=&password=`
  )

  const apiJson = await apiResponse.json();
  const { token } = apiJson;

  return {
    props: {
      token,
      page: `slug: `
    }
  }

}
*/

export default Browse;
