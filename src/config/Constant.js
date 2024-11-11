const truncateString = (text) => {
   return text.length > 15? text.substring(0, 15) + "...": text;
}

export const songs = [
    {
        _id: "1",
        title: "Billie Jean",
        image: "https://s3-alpha-sig.figma.com/img/fab5/7d37/dac780b3d02d707441f0334cbb22d318?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XfDh6Z6OTYQJ6XQ~j8lpFKjnytQyHRzIj6Ia4T6mSpg7OzK0Qn5zG~s10JSV0ZG0PrbM5TnJdX7tLB~stkuqYWmlZWfm4axKx3tlaG30uaHK5KpBsKJ9U1Hh9TaByGIlMfPz5Y663XBVKj71Q0vC8V5MgS1PUv8h3QehaH2NuQrNuVHoAYhHBGIYBNHjb8VrE5K5J8AypQHAq8JPzgEu4SPJDQr6j0qkTOonSEmv2uWgyRgdnMvQR~xHi1KxEfYLyTvjqVWI6CM2zpwYcLujdJVVmuSKKhxS-O-1EmQFId11~pbI4yJUYkMPkaK-Y2ko6jvLc7NhkS-3xDNS~DZUqQ__",
        playing: "1.040.811.084", 
        time: "4:53",
        artist: "Michael Jackson",
        album: truncateString("Thriller 25 Super Deluxe Edition"),
        song: "https://res.cloudinary.com/drxanllxs/video/upload/v1731237371/new_me_yygzf4.mp3"
    },
    {
        _id: "2",
        title: "Beat It",
        image: "https://s3-alpha-sig.figma.com/img/fab5/7d37/dac780b3d02d707441f0334cbb22d318?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XfDh6Z6OTYQJ6XQ~j8lpFKjnytQyHRzIj6Ia4T6mSpg7OzK0Qn5zG~s10JSV0ZG0PrbM5TnJdX7tLB~stkuqYWmlZWfm4axKx3tlaG30uaHK5KpBsKJ9U1Hh9TaByGIlMfPz5Y663XBVKj71Q0vC8V5MgS1PUv8h3QehaH2NuQrNuVHoAYhHBGIYBNHjb8VrE5K5J8AypQHAq8JPzgEu4SPJDQr6j0qkTOonSEmv2uWgyRgdnMvQR~xHi1KxEfYLyTvjqVWI6CM2zpwYcLujdJVVmuSKKhxS-O-1EmQFId11~pbI4yJUYkMPkaK-Y2ko6jvLc7NhkS-3xDNS~DZUqQ__",
        playing: "643.786.045", 
        time: "4:18",
        artist: "Michael Jackson",
        album: truncateString("Thriller 25 Super Deluxe Edition"),
        song: "https://res.cloudinary.com/drxanllxs/video/upload/v1731232544/the_sunshine_a7cuuh.mp3"
    },
    {
        _id: "3",
        title: truncateString("Smooth Criminal - 2012 Remaster"),
        image: "https://s3-alpha-sig.figma.com/img/b185/465f/8a5d6c233b76e53e0eea65bc21738d6b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g4jxjnGn~YvYVkRheD~vPRd3LmCBV18RE~twgW4~PPL7YsTJ60hSzfRY5NfcVWdIDO9XPP7DSqYjX~O23Sq9EVkX95akRVfeN6cz1VOODZ9a-B9cTwrXdlryMxdQ9pVaRTqKCa503Zl~Fol5nU5q4Q-Uf7cvZgbYpl9pYUHh8Qx-vv-COPYu-JssiEVlv6UWghYJSIpypsW0nb5BjBjt56AjGg7jSPqQ~qsS3NROzbvzzZdwvar07GARM9hMyfLHTLLbnjx-l2D7yZsaavOAymdHIm4P78d6yIICQnILzkWm04wQwse1imFJg5t7OvJKBvWYdNwLNi84t20lc2JipQ__",
        playing: "407.23.04", 
        time: "4:17",
        artist: "Michael Jackson",
        album: truncateString("Thriller 25 Super Deluxe Edition"),
        song: "https://res.cloudinary.com/drxanllxs/video/upload/v1731232543/its_your_time_awbcw7.mp3"
    },
    {
        _id: "4",
        title: truncateString("Don't Stop 'Til You Get Enough"),
        image: "https://s3-alpha-sig.figma.com/img/0125/de17/5e419f447d656fefcf56c79444973408?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BccxVgZ0XiveuPYXifzBRJi5hePjdDD3wCAj1d8GoeGVWIhEQKsOcEF~AAG4rWx0nhPMkjc9aNovoFc3t3gk-hQ2C1m08u5rBU--M~MS7u-iNF-Ni3zoaeGR9pg6RpzNjwKdsVrYw5PhqjDKYgYoCp88guUwNarHgBfsUIzM2-h~Gzc7tePdgfBlMUO4kshpDiPM1xxjO54PDROOIgUBddMPTETpWYorjuw88-jelujSBh1ZCvZQwcSZFJCSgPHfGp4SB3g~-CLSPAXd3KbYRXYUyzVQsVaZmJuAO8QdU8JaQxdOk-6p-Zg~ZHvMJTI6mj2Q2gLWn0GpOH4u1xqRsQ__",
        playing: "316.391.952", 
        time: "6:05",
        artist: "Michael Jackson",
        album: truncateString("Bad 25th Anniversary"),
        song: "https://res.cloudinary.com/drxanllxs/video/upload/v1731232533/night_girl_wqddbu.mp3"
    },
    {
        _id: "5",
        title: truncateString("Rock With You - Single Version"),
        image: "https://s3-alpha-sig.figma.com/img/0125/de17/5e419f447d656fefcf56c79444973408?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BccxVgZ0XiveuPYXifzBRJi5hePjdDD3wCAj1d8GoeGVWIhEQKsOcEF~AAG4rWx0nhPMkjc9aNovoFc3t3gk-hQ2C1m08u5rBU--M~MS7u-iNF-Ni3zoaeGR9pg6RpzNjwKdsVrYw5PhqjDKYgYoCp88guUwNarHgBfsUIzM2-h~Gzc7tePdgfBlMUO4kshpDiPM1xxjO54PDROOIgUBddMPTETpWYorjuw88-jelujSBh1ZCvZQwcSZFJCSgPHfGp4SB3g~-CLSPAXd3KbYRXYUyzVQsVaZmJuAO8QdU8JaQxdOk-6p-Zg~ZHvMJTI6mj2Q2gLWn0GpOH4u1xqRsQ__",
        playing: "268.187.218",
        time: "3:40",
        artist: "Michael Jackson",
        album: "Off The Wall",
        song: "https://res.cloudinary.com/drxanllxs/video/upload/v1731232501/one_two_3_xtm0xz.mp3"
    }
];
