var area = document.getElementById("area");
var list = document.querySelector(".list");
var names = ['ahmed', 'ali', 'meryem', 'mohamed', 'mostafa', 'sanae', 'hayfae', 'samir'];


function srch(arr = []) {
    const allnames = arr.map(names => {
        return `<li>${names}</li>`;
    });
    list.innerHTML = allnames.join(' ');
};
area.addEventListener("input", (e) => {
    let value = e.target.value.trim();
    const filternames = names.filter((name) => {
        return name.startsWith(value);
    });
    if (filternames.length === 0) {
        list.innerHTML = `<h1>No Names </h1>`;
        return;
    };
    srch(filternames);
});
srch(names);

