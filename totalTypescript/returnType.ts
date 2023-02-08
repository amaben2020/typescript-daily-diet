// gives you the return type of a function

// const content = getContent()

// type Content = Awaited<ReturnType<typeof getContent>>

//Partial and Required are opposite

// import { getContent } from '@builder.io'
// const content = await getContent()
// 😍
type Content = ReturnType<typeof getContent>;
