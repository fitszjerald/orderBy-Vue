Vue.config.devtools = true;

new Vue({
    el: "#app",
    data: {

        courses: [
            {
                title: "Learn PHP",
                difficulty : "Advanced",
                time : "05:20:00",
                complete: false
            },
            {
                title: "Learn Javascript",
                difficulty : "Beginner",
                time : "07:50:30",
                complete: true
            },
            {
                title: "Learn Vuejs",
                difficulty : "Advanced",
                time : "02:10:45",
                complete: false
            }
        ]
    }
})