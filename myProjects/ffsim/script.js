//Styling main bubble
const bubble = document.getElementById('objectBubble');
        bubble.style.fontWeight = '100';
        bubble.style.color = '#363636';
        bubble.style.borderStyle = 'solid';
        bubble.style.borderColor = '#696969';
        bubble.style.backgroundColor = '#999';
        bubble.style.borderRadius = "1px";
        bubble.style.textAlign = 'center';
        bubble.style.padding = '10px';
        bubble.style.margin = '20px';

// review button
const button = document.getElementById('see-details');

button.addEventListener('click', function() {
    const review = document.getElementById('review');
    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'REVIEW';
    }
});

const myTable = document.getElementById('mainTable');
    myTable.style.borderStyle = 'solid';
    myTable.style.backgroundColor = "rgb(209, 209, 209)";
    myTable.style.padding = '5px';
    myTable.style.margin = '10px';
    myTable.style.width = '100%';


/*
let object = {
    objectType: 'device',
    objectName: 'PC-2345',
    objectId: 'objectID'
}
object(object.objectName);
*/

let getDisplayName = "some displayname"
let getObjectType = "some objectType"
let getObjectId = "some objectId"

let object = {
    displayName: getDisplayName,
    type: getObjectType,
    id: getObjectId
}


newObjectName(object.displayName);
newObjectType(object.type);
newObjectId(object.id);
