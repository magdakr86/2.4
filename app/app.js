var Sources = [
    
        {
            id: 1,
            title: 'Harry Potter',
            desc: 'Fim o czarodzieju',
            poster: './images/harry_potter.jpg'
        },
        {
            id: 2,
            title: 'Król Lew',
            desc: 'Film o lwie',
            poster: './images/krol_lew.jpg'
        },
        {
            id: 3,
            title: 'Madagaskar',
            desc: 'Film o zwierzętach dżungli',
            poster: './images/madagaskar.jpg'
        }
];
    
var ClassMovie = React.createClass({
    propTypes: {
        movieElement: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(ClassMovieTitle, {
                    title: this.props.movieElement.title
                }),
                React.createElement(ClassMoviePoster, {
                    poster: this.props.movieElement.poster
                }),
                React.createElement(ClassMovieDescription, {
                    desc: this.props.movieElement.desc
                })
            )
        )
    }
});

var ClassMovieList = React.createClass({
    propTypes: {
        movielist: React.PropTypes.array.isRequired,
    },

    render: function () {
        var test = this.props.movielist.map(function (movie) {
            return React.createElement(ClassMovie, {
                key: movie.id,
                movieElement: movie
            })

        });

        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów:'),
                React.createElement('ul', {}, test)
            )
        )
    },
});


var ClassMovieTitle = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {

        return React.createElement('h2', {}, this.props.title);
    }

});

var ClassMovieDescription = React.createClass({

    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function () {

        return React.createElement('p', {}, this.props.desc);
    }

});


var ClassMoviePoster = React.createClass({

    propTypes: {
        poster: React.PropTypes.string.isRequired,
    },
    render: function () {

        return React.createElement('img', {
            src: this.props.poster
        });
    }

});

var element = React.createElement(ClassMovieList, {
    movielist: Sources
});
ReactDOM.render(element, document.getElementById('app'));
