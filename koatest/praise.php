 <?php
    //  用oop思想来写
    /**
     * 新建一个类
     */
    class connectMysql{
        //public关键字表示属性或方法是公开可见的
        public $servername;
        public $username;
        public $password;
        public $dbname;
        public $con = null;

        //  构造方法
        public function __construct($servername,$username,$password,$dbname){
            $this->servername = $servername;
            $this->username = $username;
            $this->password = $password;
            $this->dbname = $dbname;
        }

        //  数据库连接方法
        public function getConnection(){
            //  PDO
            try {
                $dsn = "mysql:host=$this->servername;dbname=$this->dbname";
                $this->con = new PDO($dsn, $this->username, $this->password);
                //echo "连接成功"; 
            }catch(PDOException $e)     {
                echo $e->getMessage();
             }
        }

        //  更新數據的方法
        public function updateDate($sql){
            if($this->con==null){
                $this->getConnection();
            }
            //向前台输出 json 格式的数据
            header('content-type:application/json;charset=utf8');
            //  執行sql
            $res = $this->con->exec($sql);
            $arr = array('result'=>$res);
            echo json_encode($arr);
            //  关闭连接
            $this->closeCon();
          /*   return $res; */
        }

        //  关闭数据库连接方法
        public function closeCon(){
            $this->con = null;
        }
    }



    /**
     * 创建子类
     */
    class childCon extends connectMysql 
    {
        //  继承父类的构造函数
        public function __construct($servername,$username,$password,$dbname){
             parent::__construct($servername,$username,$password,$dbname);
        }

        //  执行sql方法
        public function updateChildDate(){
            $sql = "UPDATE dianzan SET num=num+1 WHERE id=1";
            $this->updateDate($sql);
        }
    }


    //  实例化子类
    $praiseCon = new childCon('localhost','root','','praise');
    $praiseCon->updateChildDate();
   
    
?>  