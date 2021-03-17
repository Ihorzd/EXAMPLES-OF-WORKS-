
function Student(name,email){
    let homeworkResult=[];
    
    this.getName = function(){
        return name;
    },
    this.getEmail= function(){
        return email;
    },
    this.addHomeworkResult= function(topic,success){
        this.topic=topic;
        this.success=success;
        let obj={
            'topic' :topic,
            'success':success
        }
        homeworkResult.push(obj);
        return homeworkResult;
   
    }
    this.getHomeworkResult= function(){
        return homeworkResult;
    }

}
/*
function FrontendLab(students,failedLimit) {
    this.printStudentsList= function(){
        for(let i=0;i<students.length;i++){
            console.log(`name: ${students[i].name}, emai:${students[i].email}`);
            let emai=students[i].email;
            for(let s of homeworkResults){

            
            if(emai===s.results.email){
                console.log('dfghj')
            }
            }
            }
        }
    }
*/




