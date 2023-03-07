function Card() {
    return (
      <div>
        <h2>Hello React!</h2>
      </div>
    );
  }

// class
class card extends Reat.component(){
    render(){
        return(
            <div>
                <h2>helo react</h2>
            </div>
        )
    }
}


 
  function HelloMessage(props) {
    return <div>Hello {props.name}</div>;
  }

  // cllass

  class card extends Reat.component(){
    render(){
        return(
            <div>Hello {this.props.name}</div>
        )
    }
}



  function Comment(props) {
    return (
      <div className='Comment'>
        <div className='UserInfo'>
          <img
            className='Avatar'
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className='UserInfo-name'>
            {props.author.name}
          </div>
        </div>
        <div className='Comment-text'>{props.text}</div>
        <div className='Comment-date'>
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  // class 

  class Comment extends React.component(){
    constructor(props){
    super(props)
    }
    render(){
        return(
          <div className='Comment'>
          <div className='UserInfo'>
            <img
              className='Avatar'
              src={this.props.author.avatarUrl}
              alt={this.props.author.name}
            />
            <div className='UserInfo-name'>
              {this.props.author.name}
            </div>
          </div>
          <div className='Comment-text'>{this.props.text}</div>
          <div className='Comment-date'>
            {formatDate(this.props.date)}
          </div>
        </div>
        )
    }
}


  function Avatar(props) {
    return (
      <img
        className='Avatar'
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }

// <!-- class -->



class Avatar extends React.component(){
   constructor(props){
   super(props)
   }
   render(){
   return (
    <img
      className='Avatar'
      src={this.props.user.avatarUrl}
      alt={this.props.user.name}
    />
  );
}
}

  function UserInfo(props) {
    return (
      <div className='UserInfo'>
        <Avatar user={props.user} />
        <div className='UserInfo-name'>{props.user.name}</div>
      </div>
    );
  }

  // <!-- class -->

  class UserInfo extends React.component(){
    constructor(props){
    super(props)
    }
    render(){
      return (
        <div className='UserInfo'>
          <Avatar user={this.props.user} />
          <div className='UserInfo-name'>{this.props.user.name}</div>
        </div>
      );
    }
  }  