import React from "react";
import { Form, Input, Button } from "antd";
import { FcLock } from "react-icons/fc";
import { Link } from "react-router-dom";
import { userService } from "../../services/userService";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function Signup() {
  let history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
    userService
      .signup({ ...values, maNhom: "GP01" })
      .then((res) => {
        console.log("res", res);

        let timerInterval;
        Swal.fire({
          title: "Đăng ký thành công,",
          html: "Đi tới trang đăng nhập!",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });

        setTimeout(() => {
          history.push("/login");
        }, 3000);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://i.pinimg.com/originals/4e/27/78/4e27787d4fec4b0773c56a6f6a95f987.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="container mx-auto py-20 w-46 shadow-xl">
        <div className="bg-white px-14 py-5 rounded-xl">
          <div className="flex items-center justify-center flex-col">
            <FcLock size={40} />
            <p className="font-medium text-xl">Đăng Ký</p>
          </div>
          <Form
            name="basic"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Họ và tên: "
              name="hoTen"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền họ và tên!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Tên tài khoản: "
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền tên tài khoản!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật khẩu: "
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền mật khẩu khoản!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Email: "
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền email của bạn!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Số điện thoại: "
              name="soDt"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền số điện thoại!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <Button
                className="w-full h-10 rounded text-white cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 "
                htmlType="submit"
              >
                Đăng Ký
              </Button>
            </Form.Item>
          </Form>
          <div className="cursor-pointer flex justify-end">
            <Link to="/login">
              <p>Bạn đã có tài khoản? Đăng nhập</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
