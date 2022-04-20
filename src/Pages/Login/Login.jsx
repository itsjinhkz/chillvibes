import React from "react";
import { Form, Input, Button } from "antd";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import { userService } from "../../services/userService";
import { SET_USER_INFOR } from "../../redux/constants/userConstanst";
import { localService } from "../../services/localService";

export default function Login() {
  let history = useHistory();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    userService
      .login({ ...values, maNhom: "GP01" })
      .then((res) => {
        dispatch({
          type: SET_USER_INFOR,
          payload: res.data.content,
        });
        localService.setUserInfor(res.data.content);
        let timerInterval;
        Swal.fire({
          title: "Đăng nhập thành công,",
          html: "Đi tới trang chủ!",
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
          history.push("/");
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
            <FaUser size={40} color="orange" />
            <p className="font-medium text-xl">Đăng Nhập</p>
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
              wrapperCol={{
                span: 24,
              }}
            >
              <Button
                className=" rounded text-white cursor-pointer h-10 w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 "
                htmlType="submit"
              >
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
          <div className="cursor-pointer flex justify-end">
            <Link to="/signup">
              <p>Bạn chưa có tài khoản? Đăng Ký</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
