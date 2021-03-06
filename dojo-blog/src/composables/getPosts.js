import { ref } from "vue";

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            let res = await fetch("http://localhost:3000/posts");

            if (!res.ok) {
                throw Error("No data avaliable");
            }

            posts.value = await res.json();
        } catch (err) {
            error.value = err.message;
            console.error(error.value);
        }
    };

    return { posts, error, load }
}

export default getPosts;