

import supabase from "../client"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


function DetailsPage() {
    
    const { id } = useParams()
    let navigate = useNavigate()

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    useEffect(() => {
        const fetchTopic = async () => {
            const { data, error } = await supabase
               .from('topics')
               .select()
               .eq('id', id)
               .single()
               
            if (error) {
                navigate('/homepage', {replace: true})
            }

            if (data) {
                setTitle(data.title)
                setDescription(data.description)
            }
        }

        fetchTopic()
    }, [id, navigate])

  return (
    <div className="details-div">
        <h1 className="details-title">{title}</h1>
        <p className="details-description">{description}</p>
    </div>
  )
}

export default DetailsPage