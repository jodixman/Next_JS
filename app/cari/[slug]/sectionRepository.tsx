async function getDataRepo(param:string) {
    const res = await fetch(`https://api.github.com/users/${param}/repos`)
    await new Promise(r=>setTimeout(r,2000))
    return res.json();
  }

const RepoList = async({slug}:any)=>{
    const dataRepo = await getDataRepo(slug)
  
    return<>
      <p className=''>List Repository</p>
      <div>
        {JSON.stringify(dataRepo)}
      </div>
    </>
  }

  export default RepoList