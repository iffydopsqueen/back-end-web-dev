// VUE instance
new Vue({
    el: "#app",
    data: {
        // Define the data variables here
        selectedAuthor: "", // Initialize with empty values
        foodieLevel: "",
        bio: "",
        posts1: [
            {
                author: "Brianna",
                date: "February 18, 2021 @ 3:30 pm",
                content: "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!"
            }
        ],
        posts2: [
            {
                author: "LINH",
                date: "February 15, 2021 @ 9:46 am",
                content: "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!"
            }
        ],
        posts3: [
            {
                author: "CATHERINE LEONARDO",
                date: "February 13, 2021 @ 12:58 pm",
                content: "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure."
            }
        ],
        posts4: [
            {
                author: "KALI",
                date: "February 13, 2021 @ 11:31 am",
                content: "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!"
            }
        ]
    },
    methods: {
        showProfile(author) {
            // Set the author's information and display the floating box
            this.selectedAuthor = author;
            this.foodieLevel = ""; // Clear previous data
            this.bio = ""; // Clear previous data

            // Define the text data as a standard string literal (instead of a template literal)
            const textData = "Brianna\nFoodie Level: Novice\nBio: Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!\nLINH\nFoodie Level: Newcomer\nBio: Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.\nCATHERINE LEONARDO\nFoodie Level: Mentor\nBio: I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!\nKALI\nFoodie Level: Novice\nBio: Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!";

            // Split the text data into lines
            const lines = textData.split("\n");

            // Find the author's data
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].trim() === author) {
                    // Author found, extract foodie level and bio
                    this.foodieLevel = lines[i + 1].replace("Foodie Level: ", "").trim();
                    this.bio = lines[i + 2].replace("Bio: ", "").trim();
                    break; // Break the loop
                }
            }
            document.getElementById("profileBox").style.display = "block";
        },
        closeProfileBox() {
            // Hide the floating box when the close button is clicked
            document.getElementById("profileBox").style.display = "none";
        }
    }
});