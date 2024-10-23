import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState(null)
  const [isEdit, setIsEdit] = useState(false)

  // const fetchUserData = async () => {
  //   try {
  //     auth.onAuthStateChanged(async (user) => {
  //       if (user) {
  //         const docRef = doc(db, "Users", user.uid)
  //         const docSnap = await getDoc(docRef)
  //         if (docSnap.exists()) {
  //           setUserData(docSnap.data())
  //         } else {
  //           console.log("User document not found")
  //         };
        
  //       } else {
  //         console.log("User not logged in")
  //       }
  //     })
  //   } catch (error) {
  //     console.log("Error fetching user data:", error)
  //   }
  // }

  // const handleUpdate = async () => {
  //   try {
  //     const user = auth.currentUser;
      
  //     if (user) {
  //       const ref = doc(db, "Users", user.uid);

  //       // Use the current state of `userData` to update the Firestore document
  //       await updateDoc(ref, {
  //         name: userData.name,
  //         phone: userData.phone,
  //         address: {
  //           line1: userData.address.line1,
  //           line2: userData.address.line2,
  //         },
  //         gender: userData.gender,
  //         dob: userData.dob,
  //       });

  //       console.log("Profile updated successfully");
  //       setIsEdit(false); // Exit edit mode after saving
  //     } else {
  //       console.log("User not logged in");
  //     }
  //   } catch (error) {
  //     console.log("Error updating profile:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchUserData()
  // }, [])

  // if (!userData) {
  //   return <div>Loading...</div>
  // }

  return (
    <div className='max-w-lg flex flex-col gap-2 text-small'>
      <img className='w-36 rounded' src={assets.profile_pic} alt="" />
      {
        isEdit ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='text-3xl font-medium mt-4 text-neutral-800'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          <p>{
            isEdit ? <input className='bg-gray-100 max-w-52' type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <span className='text-blue-400'>{userData.phone}</span>
          }</p>
          <p className='font-medium'>Address:</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50' type="text" value={userData.address.line1} onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                <br />
                <input className='bg-gray-50' type="text" value={userData.address.line2} onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
              </p>
              : <p className='text-gray-500'>
                {userData.address?.line1 || ""}
                <br />
                {userData.address?.line2 || ""}
              </p>
          }
        </div>
      </div>
      <div >
        <p className='text-neutral-500 underline mt-3' >BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
              : <span className='text-gray-400'>{userData.gender}</span>
          }

          <p className='font-medium '>Date of Birth:</p>
          {
            isEdit ? <input className='max-w-28 bg-gray-100' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              : <span className='text-gray-400'>{userData.dob}</span>
          }
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit
            ? <button className='border border-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300' onClick={handleUpdate}>Save Information</button>
            : <button className='border border-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300' onClick={() => setIsEdit(true)}>Edit</button>
        }
        
      </div>

    </div>
  )
}

export default MyProfile
