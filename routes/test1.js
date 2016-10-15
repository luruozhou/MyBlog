export var routeSettings = {
    default: {
        route: "/default"
    },
    aa: {
        route: /t\/(\d+)/
    },
    bb: {
        route: "/jd"
    },
};

export default function (req, res) {
    return {
        a: "hha",
        b: "说胡好"
    }
}


export function aa(req, res) {
    console.log(req.params)
    return {
        a: "hha",
        b: req.params[0]
    }
}

export function bb(req, res) {
    console.log(req.params)
    return {
        a: "zzzzzzzzzzzzzzz",
        b: "sssssssssss"
    }
}
