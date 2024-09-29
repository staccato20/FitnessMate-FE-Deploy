import { useLocation } from "react-router-dom"

const Search = () => {
  const location = useLocation()
  const keyword = location.state?.keyword
  console.log(keyword)
  return <div>gg</div>
}

export default Search
