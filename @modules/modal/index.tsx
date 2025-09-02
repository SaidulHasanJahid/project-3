"use client";

import { useEffect, useMemo, useState } from "react";
import { Button, Input, Modal, message } from "antd";
import type { ModalProps } from "antd";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

type NewsletterModalProps = {
  ttlDays?: number;
  onlyHome?: boolean;
  backgroundUrl?: string;
};

const LS_KEY = "newsletter_modal_seen_at";
const isBrowser = typeof window !== "undefined";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function NewsletterModal({
  ttlDays = 7,
  onlyHome = false,
  backgroundUrl,
}: NewsletterModalProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const bgUrl = useMemo(
    () =>
      backgroundUrl ||
      "https://eco.rafiinternational.com/assets/images/1592369253banner.jpg",
    [backgroundUrl]
  );

  useEffect(() => {
    if (!isBrowser) return;
    if (onlyHome && pathname !== "/") return;

    try {
      const seenAt = localStorage.getItem(LS_KEY);
      if (!seenAt) {
        setOpen(true);
        return;
      }
      const seenTime = parseInt(seenAt, 10);
      const now = Date.now();
      const ttlMs = ttlDays * 24 * 60 * 60 * 1000;
      if (now - seenTime > ttlMs) {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, [pathname, ttlDays, onlyHome]);

  const closeAndRemember = () => {
    if (isBrowser) {
      localStorage.setItem(LS_KEY, String(Date.now()));
    }
    setOpen(false);
  };

  const handleSubscribe = () => {
    if (!isValidEmail(email)) {
      message.error("Please enter a valid email address.");
      return;
    }
    message.success("Subscribed! Thanks for joining our newsletter.");
    closeAndRemember();
  };

  const modalStyles: ModalProps["styles"] = {
    body: { padding: 0, borderRadius: 0, overflow: "hidden" },
    content: { borderRadius: 0, background: "transparent", boxShadow: "none" },
  };

  return (
    <Modal
      open={open}
      onCancel={closeAndRemember}
      footer={null}
      centered
      height={500}
      width={900}
      maskClosable
      styles={modalStyles}
      closable
         closeIcon={
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-md">
          <X size={20} className="text-[#333333]" />
        </div>
      }
      className="newsletter-modal"
    >
      <div
        className="relative min-h-[400px] bg-center bg-cover"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[400px] items-center justify-center  ">
          <div className="w-[90%] md:w-[75%] bg-black/50 py-4 px-4 mx-auto text-center text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase">
              NEWSLETTER
            </h2>

            <p className="text-base opacity-90 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Expedita porro ipsa nulla, alias, ab minus.
            </p>

            <div className=" flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center  md:space-x-3">

            {/* Input + Button */}
            <div className="w-full md:w-auto flex-grow flex">
              <Input
                size="large"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "#424a4d",
                  border: "none",
                  color: "#fff",
                  borderRadius: 0,
                  height: "48px",
                }}
              />
             
            </div>
             <Button
                size="large"
                onClick={handleSubscribe}
                style={{
                  fontWeight: 600,
                  width: "26%",
                  background: "#333333",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 0,
                  transition: "all 400ms ease-in",
                  height: "48px",
                }}
              >
                SUBSCRIBE
             </Button>
            </div>


          </div>
        </div>


      </div>
    </Modal>
  );
}
// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { Button, Input, Modal, message } from "antd";
// import type { ModalProps } from "antd";
// import { usePathname } from "next/navigation";
// import { X } from "lucide-react"; // custom close icon

// type NewsletterModalProps = {
//   ttlDays?: number;
//   onlyHome?: boolean;
//   backgroundUrl?: string;
// };

// const LS_KEY = "newsletter_modal_seen_at";
// const isBrowser = typeof window !== "undefined";

// const isValidEmail = (email: string) =>
//   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// export default function NewsletterModal({
//   ttlDays = 7,
//   onlyHome = false,
//   backgroundUrl,
// }: NewsletterModalProps) {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [email, setEmail] = useState("");

//   const bgUrl = useMemo(
//     () =>
//       backgroundUrl ||
//       "https://eco.rafiinternational.com/assets/images/1592369253banner.jpg",
//     [backgroundUrl]
//   );

//   useEffect(() => {
//     if (!isBrowser) return;
//     if (onlyHome && pathname !== "/") return;

//     try {
//       const seenAt = localStorage.getItem(LS_KEY);
//       if (!seenAt) {
//         setOpen(true);
//         return;
//       }
//       const seenTime = parseInt(seenAt, 10);
//       const now = Date.now();
//       const ttlMs = ttlDays * 24 * 60 * 60 * 1000;
//       if (now - seenTime > ttlMs) {
//         setOpen(true);
//       }
//     } catch {
//       setOpen(true);
//     }
//   }, [pathname, ttlDays, onlyHome]);

//   const closeAndRemember = () => {
//     if (isBrowser) {
//       localStorage.setItem(LS_KEY, String(Date.now()));
//     }
//     setOpen(false);
//   };

//   const handleSubscribe = () => {
//     if (!isValidEmail(email)) {
//       message.error("Please enter a valid email address.");
//       return;
//     }
//     message.success("Subscribed! Thanks for joining our newsletter.");
//     closeAndRemember();
//   };

//   const modalStyles: ModalProps["styles"] = {
//     body: { padding: 0, borderRadius: 0, overflow: "hidden" },
//     content: {
//       borderRadius: 0,
//       background: "transparent",
//       boxShadow: "none",
//       height: "650px", // 🔥 height boro kore dilam
//     },
//   };

//   return (
//     <Modal
//       open={open}
//       onCancel={closeAndRemember}
//       footer={null}
//       centered
//       width={800}
//       maskClosable
//       styles={modalStyles}
//       closeIcon={
//         <div className="w-1 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
//           <X size={20} className="text-[#333333]" />
//         </div>
//       }
//     >
//       <div
//         className="relative min-h-[650px] bg-center bg-cover"
//         style={{ backgroundImage: `url(${bgUrl})` }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0" />

//         {/* Content */}
//         <div className="relative z-10 flex min-h-[650px] items-center justify-center">
//            <div className="w-[90%] md:w-[75%] bg-black/50 py-4 px-4 mx-auto text-center text-white space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold uppercase">
//               NEWSLETTER
//             </h2>

//             <p className="text-base opacity-90 max-w-3xl mx-auto">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Expedita porro ipsa nulla, alias, ab minus.
//             </p>

//             <div className=" flex flex-col md:flex-row gap-4 md:gap-0 justify-center items-center  md:space-x-3">

//             {/* Input + Button */}
//             <div className="w-full md:w-auto flex-grow flex">
//               <Input
//                 size="large"
//                 placeholder="Enter Your Email Address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={{
//                   backgroundColor: "#424a4d",
//                   border: "none",
//                   color: "#fff",
//                   borderRadius: 0,
//                   height: "48px",
//                 }}
//               />
             
//             </div>
//              <Button
//                 size="large"
//                 onClick={handleSubscribe}
//                 style={{
//                   fontWeight: 600,
//                   width: "26%",
//                   background: "#333333",
//                   color: "#ffffff",
//                   border: "none",
//                   borderRadius: 0,
//                   transition: "all 400ms ease-in",
//                   height: "48px",
//                 }}
//               >
//                 SUBSCRIBE
//              </Button>
//             </div>


//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// }
