var index=0;
console.log("loaded");
const description=$('#description-container>input');
const category=$('#category-container>#categories');
const dueDate=$('#dueDate-container>input');
const taskContainer=$('main>#tasks-container');







const addBtn=$("#form-container #both-buttons #add-btn");
const deleteBtn=$("#form-container #both-buttons #delete-btn");




const showTask=function(){
    index++;
    console.log("Inside showtask", index);
    taskContainer.append(`<div class="task" id=${index}>
    <div id="left">
        <input type="checkbox" value=${index+100}>
        <div>
            <span id="des-span">${description.val()}</span><br>
        <i class="fa-solid fa-calendar-days"></i>
        <span> ${dueDate.val()}</span>
        </div>
    </div>
    <div id="right">

        <div>
            <span>${category.val()}</span>
        </div>
    </div>
</div>`)

}


const deleteTask=function(){
    let checkBoxValue= $("input:checkbox:checked").val();
    $("input:checkbox:checked").each(function(){
        $(`main>#tasks-container #${$(this).val()-100}`).remove();
    })

    console.log("Inside delete task",checkBoxValue);
    

   
    
}

addBtn.click(showTask);
deleteBtn.click(deleteTask);

