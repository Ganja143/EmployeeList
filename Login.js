import  styles from './Style.module.css';
const Login=()=>{
    return(
<body>

    <div className={styles['signPage']}>
      
          <img className={styles.bergin3} src="./images/bergin-bottle-collage-sm-3.png" alt='collage' />
          <div className={styles.rectangle24}></div>
          <div className={styles.rectangle25}></div>
          <h1 className={styles.sparkywines}>SPARKY<br />Wines.</h1>
          <div className={styles.creating}>Creating the greatest of dinner moments, <br />Great Wine for everyone..</div>
          <div className={styles.rectangle26}></div>
          
         
          <div>
            <form method="post">
            <div className={styles.signin}>SIGN-IN</div>

                <table  className={styles.fname}>
                  <tr><td className={styles.FF}>Username:</td><td><input type="email" className={styles.saw} name="txt_number"/></td></tr>
                  <tr><td className={styles.FG}>Password:</td><td><input type="password" className={styles.sai} name="txt_number"/></td></tr> 
                  <tr><td className={styles.signed}> <input type="checkbox" name="Signed" className={styles.rem}  id="remMe"/>Remember me</td><td className={styles.rem1}><a href="Passwords">Forgot password?</a></td></tr>
                  <button className={styles.rectangle33} id="login"  >Submit </button>
                  <tr><td className={styles.linki}>Don't have an account? <a href="Register" className={styles.ya}>Create an account</a></td></tr>
               </table>
              
         </form>
        </div>
    
    </div>

</body>
    )
}
  export default Login;