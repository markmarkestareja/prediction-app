const getPredictedAge = async (name:string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name:string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name:string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

type PageProps = {
  params: {
    name: string;
  }
}

export default async function Page({ params }: PageProps){
  const { name } = await params;
  const agedata = getPredictedAge(name);
  const genderdata = getPredictedGender(name);
  const countrydata = getPredictedCountry(name);
  const decodedName = decodeURIComponent(name);

  const [age, gender, country] = await Promise.all([agedata, genderdata, countrydata])
  return(
    <div className="text-blue-900">
      <div>
        <div>Personal Info</div>
        <div>Name: {decodedName}</div>
        <div>Age: {age?.age}</div>
        <div>Gender: {gender?.gender}</div>
        <div>Country: {country?.[0]?.country_id}</div>
      </div>
    </div>
  )
}