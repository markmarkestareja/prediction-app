const getPredictedAge = async (name:string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name:string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name:string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

type PageProps = {
  params: Promise<{
    name: string;
  }>
}

export default async function Page({ params }: PageProps){
  const { name } = await params;
  const agedata = getPredictedAge(name);
  const genderdata = getPredictedGender(name);
  const countrydata = getPredictedCountry(name);

  const [age, gender, country] = await Promise.all([agedata, genderdata, countrydata])
  return(
    <div className="text-blue-900">
      <div>
        <div>Personal Info</div>
        <div>Age: {age?.age}</div>
        <div>Gender: {gender?.gender}</div>
        <div>Country: {country?.[0]?.country_id}</div>
      </div>
    </div>
  )
}