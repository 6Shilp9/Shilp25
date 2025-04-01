import React, { useEffect, useState } from "react";
import "../links/css/Profile.css";
import NavBar from "../components/NavBar";
import Loader from "../components/LoadingScreen";
import Footer from "../components/Footer";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import Alert from "@mui/material/Alert";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Profile = ({ AllAuth }) => {
  const [FailureMessage, setFailureMessage] = useState("");
  const isProf = AllAuth.isProf;
  const setIsProf = AllAuth.setIsProf;

  const [mobile, setMobile] = useState("");
  const [year, setYear] = useState("");
  const [college, setCollege] = useState("");
  const [RegisteredEvents, setRegisteredEvents] = useState([]);
  const [RegisteredWorkshops, setRegisteredWorkshops] = useState([]);
  const [isIITBHUser, setIsIITBHUser] = useState(false);
  const [accommodationStatus, setAccommodationStatus] =
    useState("Unaccommodated");
  const [paidRegistration, setPaidRegistration] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.Events) {
          setRegisteredEvents(data.Events);
        }
        if (data.Workshops) {
          setRegisteredWorkshops(data.Workshops);
        }
        if (data.Mobile) {
          setMobile(data.Mobile);
        }
        if (data.College) {
          setCollege(data.College);
        }
        if (data.Year) {
          setYear(data.Year);
        }
        if (data.accommodationStatus) {
          setAccommodationStatus(data.accommodationStatus);
        }
        if (data.PaidRegistration) {
          setPaidRegistration(data.PaidRegistration);
        }
      }
    });
    setIsIITBHUser(localStorage.getItem("email").endsWith("itbhu.ac.in"));
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setFailureMessage("");
    try {
      let data = {
        uid: localStorage.getItem("UID"),
        Name: localStorage.getItem("displayName"),
        Email: localStorage.getItem("email"),
        Mobile: mobile,
        College: college,
        Year: year,
        Events: RegisteredEvents,
        Workshops: RegisteredWorkshops,
        accommodationStatus: isIITBHUser
          ? "IIT BHU Student"
          : accommodationStatus,
        PaidRegistration: paidRegistration,
      };

      if (!data.Mobile || !data.College || !data.Year) {
        setFailureMessage("Fill All Details");
        return;
      }
      await setDoc(
        doc(db, "userProfile", localStorage.getItem("UID")),
        data
      ).then(() => {
        toast.success("Profile Successfully Updated!");
        setIsProf(true);
      });
    } catch (e) {
      setFailureMessage(e.message);
      console.error("Error adding document: ", e.message);
    }
  };

  return (
    <>
      {loading ? (
        <div
          className="loader-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "black",
          }}
        >
          <Loader onComplete={() => setLoading(false)} />
        </div>
      ) : (
        <div>
          <div className="App">
            <div className="body profile-body">
              <NavBar AllAuth={AllAuth}></NavBar>
              <form onSubmit={onFormSubmit}>
                <MDBContainer className="profileContainer py-5 h-110">
                  <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol
                      lg="6"
                      className="mb-4 mb-lg-0"
                      style={{ marginTop: "10vh" }}
                    >
                      <MDBCard
                        className="mb-3 profile-card"
                        style={{ borderRadius: ".5rem" }}
                      >
                        <MDBRow className="g-0">
                          <MDBCol
                            md="4"
                            className="gradient-custom text-center text-white"
                            style={{
                              borderTopLeftRadius: ".5rem",
                              borderBottomLeftRadius: ".5rem",
                            }}
                          >
                            <MDBCardImage
                              src={localStorage.getItem("photoURL")}
                              alt="Avatar"
                              className="my-5 rounded "
                              style={{
                                width: "80px",
                              }}
                              fluid
                            />
                            <MDBTypography tag="h5">
                              {localStorage.getItem("displayName")}
                            </MDBTypography>
                            <MDBRow className="justify-content-center align-items-center userId">
                              <MDBCardText>
                                UserId: &nbsp;
                                {localStorage.getItem("UID")}
                              </MDBCardText>
                            </MDBRow>
                            <MDBIcon far icon="edit mb-5" />
                          </MDBCol>
                          <MDBCol md="8">
                            <MDBCardBody className="p-4">
                              <MDBTypography tag="h6">Email</MDBTypography>
                              <MDBCardText className="text-muted">
                                {localStorage.getItem("email")}
                              </MDBCardText>
                              <hr className="mt-0 mb-4" />
                              <MDBRow className="pt-1">
                                <MDBCol size="6" className="mb-3">
                                  <MDBTypography tag="h6">
                                    Phone <span style={{ color: "red" }}>*</span>
                                  </MDBTypography>
                                  <MDBCardText className="text-muted">
                                    <input
                                      type="text"
                                      name="mobile"
                                      defaultValue={mobile}
                                      onChange={(e) => {
                                        setMobile(e.target.value);
                                      }}
                                    ></input>
                                  </MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                  <MDBTypography tag="h6">
                                    College <span style={{ color: "red" }}>*</span>
                                  </MDBTypography>
                                  <MDBCardText className="text-muted">
                                    <input
                                      type="text"
                                      name="college"
                                      defaultValue={college}
                                      onChange={(e) => {
                                        setCollege(e.target.value);
                                      }}
                                    ></input>
                                  </MDBCardText>
                                </MDBCol>
                              </MDBRow>

                              <hr className="mt-0 mb-4" />
                              <MDBRow className="pt-1">
                                <MDBCol size="6" className="mb-3">
                                  <MDBTypography tag="h6">
                                    Year <span style={{ color: "red" }}>*</span>
                                  </MDBTypography>
                                  <MDBCardText className="text-muted">
                                    <input
                                      type="text"
                                      name="year"
                                      defaultValue={year}
                                      onChange={(e) => {
                                        setYear(e.target.value);
                                      }}
                                    ></input>
                                  </MDBCardText>
                                </MDBCol>
                                <MDBCol size="6" className="mb-3">
                                </MDBCol>

                                <MDBCol size="6" className="mb-3">
                                  <MDBCardText className="text-muted">
                                    <input
                                      type="submit"
                                      className="btn btn-outline-dark"
                                      value={
                                        isProf
                                          ? "Save Changes"
                                          : "Complete Profile"
                                      }
                                    />
                                    {FailureMessage ? (
                                      <Alert severity="error" className="mt-2">
                                        {FailureMessage}
                                      </Alert>
                                    ) : (
                                      <></>
                                    )}
                                  </MDBCardText>
                                </MDBCol>
                              </MDBRow>

                              <table
                                style={{
                                  width: "100%",
                                  margin: "0",
                                }}
                              >
                                <tr
                                  className="DashboardHeader"
                                  style={{
                                    width: "133%",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <th
                                    className="fs-2 profileHeader"
                                    style={{
                                      fontSize: "25px",
                                    }}
                                  >
                                    Dashboard
                                  </th>
                                </tr>
                                <tr
                                  className="DashboardDescription"
                                  style={{
                                    display: "flex",
                                    flex: "wrap",
                                  }}
                                >
                                  <th>
                                    Payment will open soon !
                                  </th>
                                </tr>
                                <tr>
                                  <th
                                    className="fs-5"
                                    style={{
                                      border: "2px solid purple",
                                    }}
                                  >
                                    {" "}
                                    Events
                                  </th>
                                  <th
                                    className="fs-5 "
                                    style={{
                                      border: "2px solid purple",
                                    }}
                                  >
                                    Status
                                  </th>
                                </tr>
                                <tr
                                  style={{
                                    border: "2px solid purple",
                                  }}
                                >
                                  <td
                                    style={{
                                      border: "2px solid purple",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Registration Fees
                                  </td>
                                  <td
                                    style={{
                                      border: "2px solid purple",
                                    }}
                                  >
                                    {paidRegistration ? "✓" : "✖"}
                                  </td>
                                </tr>
                                {RegisteredEvents.map((event, i) => {
                                  return (
                                    <tr key={i}>
                                      <td
                                        style={{
                                          border: "2px solid purple",
                                          fontStyle: "italic",
                                          fontWeight: "500",
                                        }}
                                      >
                                        {event}
                                      </td>
                                      <td
                                        style={{
                                          border: "2px solid purple",
                                        }}
                                      >
                                        {paidRegistration ? "✓" : "✖"}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </table>

                              <MDBCardText
                                className="text-muted"
                                style={{
                                  marginTop: "15px",
                                }}
                              >
                                {FailureMessage ? (
                                  <Alert severity="error" className="mt-2">
                                    {FailureMessage}
                                  </Alert>
                                ) : (
                                  <></>
                                )}
                              </MDBCardText>

                              <table
                                style={{
                                  width: "100%",
                                  margin: "0",
                                }}
                              >
                                <tr
                                  style={{
                                    width: "130%",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <th
                                    className="fs-3 profileHeader"
                                    style={{
                                      fontSize: "25px",
                                    }}
                                  >
                                    Workshops
                                  </th>
                                </tr>
                                <tr
                                  className="WorkshopDescription"
                                  style={{
                                    display: "flex",
                                    flex: "wrap",
                                  }}
                                >
                                  <th>
                                    You have to pay the registration fee of
                                    ₹99 to avail the <b>FREE</b> workshops.
                                  </th>
                                </tr>
                                <tr>
                                  <th
                                    className="fs-5 "
                                    style={{
                                      border: "2px solid purple",
                                    }}
                                  >
                                    {" "}
                                    Registered Workshops
                                  </th>
                                  <th
                                    className="fs-5 "
                                    style={{
                                      border: "2px solid purple",
                                    }}
                                  >
                                    {" "}
                                    Status
                                  </th>
                                </tr>
                                {RegisteredWorkshops.map((workshop, i) => {
                                  return (
                                    <tr key={i}>
                                      <td
                                        style={{
                                          border: "2px solid purple",
                                          fontStyle: "italic",
                                          fontWeight: "500",
                                        }}
                                      >
                                        {workshop}
                                      </td>
                                      <td
                                        style={{
                                          border: "2px solid purple",
                                        }}
                                      >
                                        {paidRegistration ? "✓" : "✖"}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </table>
                              <br />

                              {isIITBHUser ||
                              accommodationStatus === "IIT BHU Student" ? (
                                <></>
                              ) : (
                                <>
                                  <table
                                    style={{
                                      width: "100%",
                                      margin: "0",
                                    }}
                                  >
                                    <tr
                                      className="accommodationHeader"
                                      style={{
                                        width: "133%",
                                        display: "flex",
                                        position: "relative",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <th
                                        className="profileHeader"
                                        style={{
                                          fontSize: "25px",
                                        }}
                                      >
                                        Accommodation
                                      </th>
                                    </tr>
                                    <tr>
                                      <th
                                        className=" "
                                        style={{
                                          border: "2px solid purple",
                                        }}
                                      >
                                        Accommodation Type
                                      </th>
                                      <th
                                        className=" "
                                        style={{
                                          border: "2px solid purple",
                                        }}
                                      >
                                        Fees
                                      </th>
                                      <th
                                        className=" "
                                        style={{
                                          border: "2px solid purple",
                                        }}
                                      >
                                        Status
                                      </th>
                                    </tr>
                                    <tr
                                      style={{
                                        border: "2px solid purple",
                                      }}
                                    >
                                      <td
                                        style={{
                                          border: "2px solid purple",
                                        }}
                                      >
                                        Only Accommodation for 3 days
                                      </td>
                                      <td
                                        style={{
                                          border: "2px solid purple",
                                          fontWeight: "600",
                                        }}
                                      >
                                        499/-
                                      </td>
                                      <td
                                        style={{
                                          border: "2px solid purple",
                                          fontWeight: "600",
                                        }}
                                      >
                                        {accommodationStatus ===
                                        "Accommodation"
                                          ? "✓"
                                          : "✖"}
                                      </td>
                                    </tr>
                                    <tr
                                      style={{
                                        border: "2px solid purple",
                                      }}
                                    >
                                      <td
                                        style={{
                                          border: "2px solid purple",
                                        }}
                                      >
                                        Accommodation + Food for 3 days
                                      </td>
                                      <td
                                        style={{
                                          border: "2px solid purple",
                                          fontWeight: "600",
                                        }}
                                      >
                                        899/-
                                      </td>
                                      <td
                                        style={{
                                          border: "2px solid purple",
                                          fontWeight: "600",
                                        }}
                                      >
                                        {accommodationStatus ===
                                        "Accommodation + Food"
                                          ? "✓"
                                          : "✖"}
                                      </td>
                                    </tr>
                                  </table>
                                </>
                              )}
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </form>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Profile;