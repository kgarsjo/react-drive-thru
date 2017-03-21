var initialId = 1000;

export function getId() {
    var id = initialId;
    initialId += 1;
    return id;
}
