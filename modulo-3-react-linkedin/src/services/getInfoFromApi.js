function getInfoFromApi() {
        return fetch('https://randomuser.me/api/?results=10')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.results);
                return data.results.map((user) => {
                    return {
                        id: user.id.value,
                        name: user.name.first,
                        surname: user.name.last,
                        gender: user.gender,
                        age: user.dob.age,
                        city: user.location.city,
                        image: user.picture.medium,
                    }
                });
            });
    };

export default getInfoFromApi;