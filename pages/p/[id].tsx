import { GetServerSideProps } from "next"
import prisma from "../../lib/prisma"


export default function post({post}: {post : {id: Number , title: string, content: string , published: boolean ,authorId: Number, author: {name :string}}}){

    return(
        <div>
            post: {post.id} by {post.author.name}
            <div>
                {post.title}
                <p>
                    {post.content}
                </p>
            </div>
        </div>
    )
}

// Server side Rendering example
export const getServerSideProps:GetServerSideProps = async({params}) => {
    const post =  await prisma?.post.findUnique({
        where : {id: Number(params?.id) || -1},
        include: {
            author: {
                select: {
                    name: true
                }
            }
        }
    });

    return {props : {post}}
}