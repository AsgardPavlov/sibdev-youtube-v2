// 

const {favs} = useContext(FavContext)
const {removeFav} = useContext(FavContext)

//

const [fav, setFav] = useState({
    id: "",
    task: "",
    search: "",
    count: result
})

const handleTaskInputChange = (e) => {
    setFav({...fav, task: e.target.value})
}

const addFav = (fav) => {
    setFavs([fav, ...favs])
  }
  
const handleSubmite = (e) => {
    e.preventDefault();
    addFav({...fav, id: Date.now()});
    setFav({...fav, task: ""})
}
  //context components start
  const removeFav = (id) => {
    setFavs(favs.filter(fav => fav.id !== id))
  }

  const [favs, setFavs] = useState([])

  const LOCAL_STORAGE_KEY = "CHOIGAAN_IS_AWESOME"
  
  useEffect(() => {
    const storageFavs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageFavs){
      setFavs(storageFavs)
    }
  }, [])

  //this is updating todos in localstorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favs))
  }, [favs])
  //contex components end