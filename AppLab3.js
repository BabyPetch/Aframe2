class App extends React.Component {

    state = {
        qlist: [],
        status: 0,
    }

    constructor() {
        super();
        this.load_data();
    }


    async load_data() {
        var res = await fetch("quiz2.json");
        this.setState({ qlist: await res.json() });
    }

}
