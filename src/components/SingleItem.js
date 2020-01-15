






const SingleItem = (props) => {


    return (


        <form action="/action_page.php">

        
<div class="form-check-inline">
      <label class="form-check-label" for="radio2">
        <input type="radio" class="form-check-input" id="radio2" name="optradio" value="Gold" />
      </label>
    </div>
<div class="form-check-inline">
      <label class="form-check-label" for="radio2">
        <input type="radio" class="form-check-input" id="radio2" name="optradio" value="Silver" />
      </label>
    </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" placeholder="Enter email" id="email" />
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
            </div>
                   
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

                    );
                  
}