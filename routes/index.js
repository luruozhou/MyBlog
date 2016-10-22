export var routeSettings = {
    default: {
        route:/^\/?$/
    }
};

export default function (req, res) {
    return {
        a: [{name:"john"},{name:"mary"},{name:"haha"},{name:"jiang"}],
        b: "说胡好"
    }
}
