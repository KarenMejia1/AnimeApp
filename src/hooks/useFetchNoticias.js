export const useFetchTopAnime =() =>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(() =>{
        getTopAnime()
        .then(info =>{
            setState({
                data: info,
                loading: false
            })
        })
    },[])
    return state;
}