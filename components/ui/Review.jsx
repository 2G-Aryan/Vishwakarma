

const posts=[
   { id: 1,
    title: 'Aryan',
    href: '#',
    description: 'content',
      date: '30-12',
      datetime: '2003-12',
      category: {title: '4.7',href:'#',
        author:{
            name:"Aryan",
            role:"co-founder",
            href:'#',
            
            imageUrl:'/image/profile1.jpg',
        }
      }

   },
   { id: 2,
    title: 'Aryan',
    href: '#',
    description: 'content',
      date: '30-12',
      datetime: '2003-12',
      category: {title: '4.7',href:'#',
        author:{
            name:"Aryan",
            role:"co-founder",
            href:'#',
            
            imageUrl:'/image/profile2.jpg',
        }
      }

   },
   { id: 3,
    title: 'Aryan',
    href: '#',
    description: 'content',
      date: '30-12',
      datetime: '2003-12',
      category: {title: '4.7',href:'#',
        author:{
            name:"Aryan",
            role:"co-founder",
            href:'#',
            
            imageUrl:'/image/profile3.jpg',
        }
      }

   },
]







export default function Review(){
    return(

        <div className="pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
               <h2 className="text-3xl font-vold tracking-tight sm:text-4xl">Customer Reviews</h2>
               <p className="mt-2 text-lg" leading-8 text-muted-foreground>
               Learn how to grow your business
               </p>
               <div>
                {
                    posts.map((post)=>(
                        <article key={post.id}>

                            <div>
                                <time datetime="{post.datetime}">
                                    <Image src="/image/star.svg" 
                                    width={180}
                                    height={5}/>
                                </time>
                            </div>
                        </article>
                    ))
                }
               </div>
            </div>
        </div>
    )
}